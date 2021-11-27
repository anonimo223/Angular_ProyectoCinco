import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'myPipe'
})
export class MyPipePipe implements PipeTransform {
    transform(value: string, hidden: boolean = true):any {
        if (hidden) {
            value = value.replace(/[a-zA-Z1-9]/gi, '*');
        }
        return value;
    }
}