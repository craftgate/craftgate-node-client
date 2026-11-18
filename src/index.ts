import {ReportFilter} from './request/dto/ReportFilter';

import Adapter from './adapter';
import CraftgateClient from './CraftgateClient';
import CraftgateError from './CraftgateError';
import Model from './model';

const Craftgate = {
  Client: CraftgateClient,
  Model,
  ReportFilter,
  Adapter,
  CraftgateError
};

export = Craftgate;
