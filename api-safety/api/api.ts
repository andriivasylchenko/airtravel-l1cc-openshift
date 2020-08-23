export * from './safety.service';
import { SafetyService } from './safety.service';
export * from './security.service';
import { SecurityService } from './security.service';
export const APIS = [SafetyService, SecurityService];
