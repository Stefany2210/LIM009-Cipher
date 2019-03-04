describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',
    () => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG")
    }
    );

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',
    () => {
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg")
    }
    );

    it('debería retornar "h ijklmnopqrstuvwxyzabcdefg" para "a bcdefghijklmnopqrstuvwxyz" con offset 33',
    () => {
      assert.equal(cipher.encode(33,"a bcdefghijklmnopqrstuvwxyz"),"h ijklmnopqrstuvwxyzabcdefg")
    }
    );

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',
    () => {
     assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ") 
    }
    );

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33',
    () => {
     assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz") 
    }
    );

    it('debería retornar "a bcdefghijklmnopqrstuvwxyz" para "h ijklmnopqrstuvwxyzabcdefg" con offset 33',
    () => {
     assert.equal(cipher.decode(33,"h ijklmnopqrstuvwxyzabcdefg"),"a bcdefghijklmnopqrstuvwxyz") 
    }
    );
  });

});
