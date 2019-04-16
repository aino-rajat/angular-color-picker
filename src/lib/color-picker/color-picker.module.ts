import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { EMPTY_COLOR, USED_COLORS, ColorPickerConfig } from './color-picker';

import { AoppsColorPickerService } from './color-picker.service';

import { MccColorPickerComponent } from './color-picker.component';
import { MccColorPickerSelectorComponent } from './color-picker-selector.component';
import { MccColorPickerCollectionComponent } from './color-picker-collection.component';
import {
  MccConnectedColorPickerDirective,
  MccColorPickerOriginDirective,
  MccColorPickerOptionDirective,
} from './color-picker.directives';

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    OverlayModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    MccColorPickerComponent,
    MccConnectedColorPickerDirective,
    MccColorPickerSelectorComponent,
    MccColorPickerOriginDirective,
    MccColorPickerOptionDirective,
    MccColorPickerCollectionComponent,
  ],
  exports: [
    MccColorPickerComponent,
    MccConnectedColorPickerDirective,
    MccColorPickerOriginDirective,
    MccColorPickerCollectionComponent,
  ],
  providers: [
    AoppsColorPickerService,
    { provide: EMPTY_COLOR, useValue: 'none' },
    { provide: USED_COLORS, useValue: [] }
  ],
})
export class AppopsColorPickerModule {
  /**
   *
   */
  static forRoot(config: ColorPickerConfig): ModuleWithProviders {
    return {
      ngModule: AppopsColorPickerModule,
      providers: [
        { provide: EMPTY_COLOR, useValue: config.empty_color || 'none' },
        { provide: USED_COLORS, useValue: config.used_colors || [] }
      ],
    };
  }
}
