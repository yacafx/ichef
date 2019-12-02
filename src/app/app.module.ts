import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import {
    FuseProgressBarModule,
    FuseSidebarModule,
    FuseThemeOptionsModule
} from "@fuse/components";
import { FuseModule } from "@fuse/fuse.module";
import { FuseSharedModule } from "@fuse/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppComponent } from "app/app.component";
import { FakeDbService } from "app/fake-db/fake-db.service";
import { fuseConfig } from "app/fuse-config";
import { LayoutModule } from "app/layout/layout.module";
import { AppStoreModule } from "app/store/store.module";
import "hammerjs";

const appRoutes: Routes = [
    {
        path: "",
        loadChildren: "./main/apps/academy/academy.module#AcademyModule"
    },
    {
        path: "**",
        redirectTo: "/"
    }
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
