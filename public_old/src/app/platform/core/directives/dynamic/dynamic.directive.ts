import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Compiler,
  Directive,
  Inject,
  Input,
  Output,
  EventEmitter,
  NgModule,
  Type,
  ViewContainerRef,
  ReflectiveInjector,
  OnDestroy
} from '@angular/core';

import { COMPONENT_OUTLET_MODULE } from './dynamic.helpers';

@Directive({
  selector: '[componentOutlet]',
})
export class TdComponentOutlet implements OnDestroy {
  @Input('componentOutlet') private template: string;
  @Input('componentOutletSelector') private selector: string;
  @Input('componentOutletContext') private context: any;

  @Output() load = new EventEmitter();

  component: ComponentRef<any>;
  moduleType: any;
  cmpType: any;

  constructor(
    @Inject(COMPONENT_OUTLET_MODULE) private moduleMeta: NgModule,
    private vcRef: ViewContainerRef,
    private compiler: Compiler
  ) { }

  private _createDynamicComponent(): Type<any> {
    let ctx = this.context;

    const metadata = new Component({
      selector: this.selector,
      template: this.template,
    });

    const cmpClass = class _ implements OnDestroy {
      context = ctx;

      ngOnDestroy() {
        ctx = null;
      }
    };

    return Component(metadata)(cmpClass);
  }

  private _createDynamicModule(componentType: Type<any>) {
    const declarations = this.moduleMeta.declarations || [];
    declarations.push(componentType);
    const moduleMeta: NgModule = {
      imports: this.moduleMeta.imports,
      providers: this.moduleMeta.providers,
      schemas: this.moduleMeta.schemas,
      declarations: declarations
    };
    return NgModule(moduleMeta)(class _ { })
  }

  ngOnChanges() {
    if (!this.template) return;
    this.cmpType = this._createDynamicComponent();
    this.moduleType = this._createDynamicModule(this.cmpType);
    const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
    this.compiler.compileModuleAndAllComponentsAsync<any>(this.moduleType)
      .then(factory => {
        let cmpFactory: any;
        for (let i = factory.componentFactories.length - 1; i >= 0; i--) {
          if (factory.componentFactories[i].componentType === this.cmpType) {
            cmpFactory = factory.componentFactories[i];
            break;
          }
        }
        return cmpFactory;
      })
      .then(cmpFactory => {
        if (cmpFactory) {
          this.vcRef.clear();
          this.component = this.vcRef.createComponent(cmpFactory, 0, injector);
          this.component.changeDetectorRef.detectChanges();
          this.load.emit(true);
        }
      });
  }

  ngOnDestroy() {
    if (this.component) {
      this.component.destroy();
    }

    if (this.compiler) {
      if (this.cmpType) {
        this.compiler.clearCacheFor(this.cmpType);
      }
      if (this.moduleType) {
        this.compiler.clearCacheFor(this.moduleType);
      }
    }
  }
}