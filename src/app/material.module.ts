import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from "@angular/material/sort";
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    imports: [
        MatButtonModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatIconModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule
    ],
    exports: [
        MatButtonModule,
        MatDialogModule,
        MatListModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatIconModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule
        

    ]
})
export class MaterialModule {}