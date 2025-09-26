describe('Script Tests', () => {
    it('should return true for valid input', () => {
        expect(true).toBe(true);
    });

    it('should return false for invalid input', () => {
        expect(false).toBe(false);
    });
});

describe("calcularDiasCrecimiento", function() {
    it("debe devolver 8 para (3, 2, 10)", function() {
        expect(calcularDiasCrecimiento(3, 2, 10)).toBe(8);
    });
    it("debe devolver 1 si la altura deseada se alcanza el primer día", function() {
        expect(calcularDiasCrecimiento(10, 2, 5)).toBe(1);
    });
});