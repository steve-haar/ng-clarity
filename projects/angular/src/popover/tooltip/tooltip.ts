/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ElementRef } from '@angular/core';

import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { POPOVER_HOST_ANCHOR } from '../common/popover-host-anchor.token';
import { TooltipIdService } from './providers/tooltip-id.service';

@Component({
  selector: 'clr-tooltip',
  template: `<ng-content></ng-content>`,
  host: {
    '[class.tooltip]': 'true',
  },
  providers: [ClrPopoverToggleService, { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef }, TooltipIdService],
})
export class ClrTooltip {}
