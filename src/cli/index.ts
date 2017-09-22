#!/usr/bin/env node

import * as cli from 'commander';

cli
  .version('0.0.1')
  .option('-p --peppers', 'Add peppers')
  .parse(process.argv);
