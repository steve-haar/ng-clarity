/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import {
  angleIcon,
  calendarIcon,
  checkCircleIcon,
  ClarityIcons,
  eventIcon,
  exclamationCircleIcon,
} from '@cds/core/icon';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrConditionalModule } from '../../utils/conditional/conditional.module';
import { ClrFocusTrapModule } from '../../utils/focus-trap/focus-trap.module';
import { ClrHostWrappingModule } from '../../utils/host-wrapping/host-wrapping.module';
import { ClrPopoverModuleNext } from '../../utils/popover/popover.module';
import { ClrCommonFormsModule } from '../common/common.module';
import { ClrCalendar } from './calendar';
import { ClrDateContainer } from './date-container';
import { ClrDateInput } from './date-input';
import { ClrDateInputValidator } from './date-input.validator';
import { ClrDatepickerViewManager } from './datepicker-view-manager';
import { ClrDay } from './day';
import { ClrDaypicker } from './daypicker';
import { ClrMonthpicker } from './monthpicker';
import { ClrYearpicker } from './yearpicker';

export const CLR_DATEPICKER_DIRECTIVES: Type<any>[] = [
  ClrDay,
  ClrDateContainer,
  ClrDateInput,
  ClrDateInputValidator,
  ClrDatepickerViewManager,
  ClrMonthpicker,
  ClrYearpicker,
  ClrDaypicker,
  ClrCalendar,
];

@NgModule({
  imports: [
    CommonModule,
    ClrHostWrappingModule,
    ClrConditionalModule,
    ClrPopoverModuleNext,
    ClrIconModule,
    ClrFocusTrapModule,
    ClrCommonFormsModule,
  ],
  declarations: [CLR_DATEPICKER_DIRECTIVES],
  exports: [CLR_DATEPICKER_DIRECTIVES],
})
export class ClrDatepickerModule {
  constructor() {
    ClarityIcons.addIcons(exclamationCircleIcon, checkCircleIcon, angleIcon, eventIcon, calendarIcon);
  }
}
