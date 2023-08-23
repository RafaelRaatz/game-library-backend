import { Repository } from 'typeorm';
import { Platform } from './entities/platform.entity';
export declare class PlatformRepository extends Repository<Platform> {
    findById(id: string): Promise<Platform | undefined>;
}
export default PlatformRepository;
