import { SetMetadata } from '@nestjs/common/decorators/core/set-metadata.decorator';
import { UserRole } from 'src/users/entities/user.entity';

export type AllowedRoles = keyof typeof UserRole | 'Any';

export const Role = (roles: AllowedRoles[]) => SetMetadata('roles', roles);
