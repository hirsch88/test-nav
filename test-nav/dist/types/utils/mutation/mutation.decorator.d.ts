import { ComponentInterface } from '../../stencil-public-runtime';
import { BalMutationObserver, MutationObserverOptions } from './mutation.interfaces';
export declare function ListenToMutation(options: Partial<MutationObserverOptions>): (target: ComponentInterface & BalMutationObserver, _propertyKey: string, _descriptor: PropertyDescriptor) => void;
