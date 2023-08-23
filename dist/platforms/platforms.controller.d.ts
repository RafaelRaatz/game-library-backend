import { PlatformsService } from './platforms.service';
import { CreatePlatformDto } from './dto/create-platform.dto';
export declare class PlatformsController {
    private readonly platformsService;
    constructor(platformsService: PlatformsService);
    create(createPlatformDto: CreatePlatformDto): Promise<import("./entities/platform.entity").Platform>;
    findAll(): Promise<import("./entities/platform.entity").Platform[]>;
    remove(id: string): Promise<import("./entities/platform.entity").Platform>;
}
