import * as ChatActionCreators from './chat';
import * as MessageActionCreators from './message';
import * as InfoActionCreators from './info';


export default {
    ...ChatActionCreators,
    ...MessageActionCreators,
    ...InfoActionCreators,
}