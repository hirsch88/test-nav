import { ComponentInterface } from '../../stencil-public-runtime';
import { BalElementStateObserver } from './element-states.interfaces';
export declare function ListenToElementStates(): (target: ComponentInterface & BalElementStateObserver, _propertyKey: string, _descriptor: PropertyDescriptor) => void;
