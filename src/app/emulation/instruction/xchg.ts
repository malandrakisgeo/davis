import { CPU } from "../cpu";
import { MemoryView } from "../memory-view";
import { BinaryOperation } from "./instruction";

export class Xchg extends BinaryOperation
{
    execute(cpu: CPU): number
    {
        let temp = this.source.getValue();
        this.source.setValue(this.target.getValue());
        this.target.setValue(temp);
        return cpu.getNextInstruction();
    }

    loadParameters(register1: MemoryView, register2: MemoryView)
    {
        this.target = register1;
        this.source = register2;
    }
}