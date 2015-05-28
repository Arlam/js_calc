describe('Command', function() {

	describe('Test PLUS command', function() {
		it('Should return 10', function() {
			expect(10).toBe(Command.PLUS.execute(4, 6));
		});
	});

		describe('Test MINUS command', function() {
		it('Should return -2', function() {
			expect(-2).toBe(Command.MINUS.execute(4, 6));
		});
	});

	describe('Test MULTIPLICATION command', function() {
		it('Should return 24', function() {
			expect(24).toBe(Command.MULTIPLICATION.execute(4, 6));
		});
	});

	describe('Test DIVISION command', function() {
		it('Should return 0.4', function() {
			expect(0.4).toBe(Command.DIVISION.execute(2, 5));
		});
	});			
});