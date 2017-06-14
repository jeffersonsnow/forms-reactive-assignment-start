import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export class CustomValidators {
    static invalidProjectName(control: FormControl): {[s: string]: boolean} { 
        // static allows us to access the function without having to instatiate our own class
        if (control.value === 'Test'){
            return{'invalidProjectName': true}
        }
            return null;
    }
    static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any>{
        const promise = new Promise<any>((resolve, reject) =>{
            setTimeout(()=>{
                if(control.value === 'Testproject'){
                    resolve({'invalidProjectName': true})
                } else {
                    resolve(null)
                }
            }, 2000);
        });
        return promise;
    }
}