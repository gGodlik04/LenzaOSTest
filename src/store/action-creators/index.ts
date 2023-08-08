import * as ChatActionCreators from './chat';
import * as MessageActionCreators from './message';

export default {
    ...ChatActionCreators,
    ...MessageActionCreators
}