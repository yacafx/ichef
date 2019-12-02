import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { FuseSidebarModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { AcademyCourseService } from 'app/main/apps/academy/course.service';
import { AcademyCourseComponent } from 'app/main/apps/academy/course/course.component';
import { AcademyCoursesService } from 'app/main/apps/academy/courses.service';
import { AcademyCoursesComponent } from 'app/main/apps/academy/courses/courses.component';

const routes = [
    {
        path: 'recetas',
        component: AcademyCoursesComponent,
        resolve: {
            academy: AcademyCoursesService
        }
    },
    {
        path: 'recetas/:courseId/:courseSlug',
        component: AcademyCourseComponent,
        resolve: {
            academy: AcademyCourseService
        }
    },
    {
        path: '**',
        redirectTo: 'recetas'
    }
];

@NgModule({
    declarations: [AcademyCoursesComponent, AcademyCourseComponent],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,

        FuseSharedModule,
        FuseSidebarModule
    ],
    providers: [AcademyCoursesService, AcademyCourseService]
})
export class AcademyModule {}
