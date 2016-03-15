define('frontend/templates/components/subscriber-list', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/subscriber-list.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("Friends who listen to Developer Tea");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/components/subscriber-list.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1,"class","subscriber-list subscriber-img");
        dom.setAttribute(el1,"src","https://scontent-sjc2-1.xx.fbcdn.net/hprofile-xat1/v/t1.0-1/p100x100/10306480_10153905051782598_687491990428690770_n.jpg?oh=1a9f7862204643b196211528ac74c695&oe=56AE849F");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1,"class","subscriber-list subscriber-img");
        dom.setAttribute(el1,"src","https://scontent-sjc2-1.xx.fbcdn.net/hprofile-xat1/v/t1.0-1/p100x100/10306480_10153905051782598_687491990428690770_n.jpg?oh=1a9f7862204643b196211528ac74c695&oe=56AE849F");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1,"class","subscriber-list subscriber-img");
        dom.setAttribute(el1,"src","https://scontent-sjc2-1.xx.fbcdn.net/hprofile-xat1/v/t1.0-1/p100x100/10306480_10153905051782598_687491990428690770_n.jpg?oh=1a9f7862204643b196211528ac74c695&oe=56AE849F");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","if",[["get","showTitle",["loc",[null,[1,6],[1,15]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});