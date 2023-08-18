import * as ChatActionCreators from './chat';
import * as MessageActionCreators from './message';
import * as InfoActionCreators from './info';
import * as newMessageInputActionCreators from './newMessageInput';


export default {
    ...ChatActionCreators,
    ...MessageActionCreators,
    ...InfoActionCreators,
    ...newMessageInputActionCreators
}