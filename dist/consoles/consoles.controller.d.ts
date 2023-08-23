import { ConsolesService } from './consoles.service';
import { CreateConsoleDto } from './dto/create-console.dto';
export declare class ConsolesController {
    private readonly consolesService;
    constructor(consolesService: ConsolesService);
    create(createConsoleDto: CreateConsoleDto): Promise<import("./entities/console.entity").Console>;
    findAll(): Promise<import("./entities/console.entity").Console[]>;
    findOne(id: string): string;
    remove(id: string): string;
}
