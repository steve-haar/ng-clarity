/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isPlatformBrowser } from '@angular/common';
import { Component, ContentChild, ElementRef, Inject, Input, PLATFORM_ID } from '@angular/core';

import { ClrTimelineStepState } from './enums/timeline-step-state.enum';
import { TimelineIconAttributeService } from './providers/timeline-icon-attribute.service';
import { ClrTimelineStepTitle } from './timeline-step-title';

@Component({
  selector: 'clr-timeline-step',
  template: `
    <ng-content select="clr-timeline-step-header"></ng-content>
    <span class="clr-sr-only">{{ stepTitleText }}</span>
    <ng-container *ngIf="!isProcessing; else processing">
      <cds-icon
        [attr.status]="iconStatus"
        [attr.shape]="iconShape"
        [attr.aria-label]="iconAriaLabel"
        role="img"
      ></cds-icon>
    </ng-container>
    <div class="clr-timeline-step-body">
      <ng-content select="clr-timeline-step-title"></ng-content>
      <ng-content select="clr-timeline-step-description"></ng-content>
    </div>

    <ng-template #processing>
      <clr-spinner clrMedium [attr.aria-label]="iconAriaLabel"></clr-spinner>
    </ng-template>
  `,
  host: { '[class.clr-timeline-step]': 'true' },
})
export class ClrTimelineStep {
  @Input('clrState') state: ClrTimelineStepState = ClrTimelineStepState.NOT_STARTED;

  stepTitleText: string;
  @ContentChild(ClrTimelineStepTitle, { read: ElementRef })
  stepTitle: ElementRef;

  constructor(
    private iconAttributeService: TimelineIconAttributeService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngAfterContentInit() {
    if (this.stepTitle && isPlatformBrowser(this.platformId)) {
      this.stepTitleText = this.stepTitle.nativeElement.innerText;
    }
  }

  get iconAriaLabel(): string {
    return this.iconAttributeService.getAriaLabel(this.state);
  }

  get iconShape(): string {
    return this.iconAttributeService.getIconShape(this.state);
  }

  get iconStatus(): string {
    return this.iconAttributeService.getIconStatus(this.state);
  }

  get isProcessing(): boolean {
    return this.state === ClrTimelineStepState.PROCESSING;
  }
}
