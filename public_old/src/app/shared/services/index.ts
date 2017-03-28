import { RestService } from './rest.service';
export { RestService } from './rest.service';

import { ParserService } from './parser.service';
import { SoundService } from './sound.service';

export { ParserService } from './parser.service';
export { SoundService } from './sound.service';

export const SHARED_PROVIDERS: any = [
    RestService,
    ParserService,
    SoundService
];