/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';

@Injectable()
export class RowActionService {
  private actionableCount = 0;

  register() {
    this.actionableCount++;
  }

  unregister() {
    this.actionableCount--;
  }

  /**
   * false means no rows with action
   */
  get hasActionableRow(): boolean {
    return this.actionableCount > 0;
  }
}
