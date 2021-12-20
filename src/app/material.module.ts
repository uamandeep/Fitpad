import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatIconModule, MatDatepickerModule, MatFormFieldModule, MatInputModule],
    exports: [MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatIconModule, MatDatepickerModule, MatFormFieldModule, MatInputModule]
})
export class MaterialModule {}