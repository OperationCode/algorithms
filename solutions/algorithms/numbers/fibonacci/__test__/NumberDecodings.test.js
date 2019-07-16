import { nwd, nwdMem, nwd_dp, nwd_c }  from '../NumberDecodings';


describe('NumberDecodings', () => {
  it('should calculatenumber of decodings correctly', () => {
    expect(nwd("11",0)).toEqual(2);
    expect(nwd("1212",0)).toEqual(5);
      expect(nwd("122",0)).toEqual(3);
      expect(nwd("1227",0)).toEqual(3);
      expect(nwd("10122",0)).toEqual(3);
    expect(nwd("101227",0)).toEqual(3);
    expect(nwd("101010",0)).toEqual(1);
    expect(nwd("123123123",0)).toEqual(27);
    expect(nwd("1230123010",0)).toEqual(9);
    expect(nwd("123242526",0)).toEqual(24);

  });



  it('should calculatenumber of decodings correctly with memoization', () => {
    expect(nwdMem("11",0)).toEqual(2);
      expect(nwdMem("1212",0)).toEqual(5);
      expect(nwdMem("122",0)).toEqual(3);
      expect(nwdMem("1227",0)).toEqual(3);
      expect(nwdMem("10122",0)).toEqual(3);
      expect(nwdMem("101227",0)).toEqual(3);
      expect(nwdMem("101010",0)).toEqual(1);
      expect(nwdMem("123123123",0)).toEqual(27);
      expect(nwdMem("1230123010",0)).toEqual(9);
      expect(nwdMem("123242526",0)).toEqual(24);
  });



  it('should calculate number of decodings correctly iteratively', () => {
    expect(nwd_dp("11",0)).toEqual(2);
      expect(nwd_dp("1212",0)).toEqual(5);
      expect(nwd_dp("122",0)).toEqual(3);
      expect(nwd_dp("1227",0)).toEqual(3);
      expect(nwd_dp("10122",0)).toEqual(3);
      expect(nwd_dp("101227",0)).toEqual(3);
      expect(nwd_dp("101010",0)).toEqual(1);
      expect(nwd_dp("123123123",0)).toEqual(27);
      expect(nwd_dp("1230123010",0)).toEqual(9);
      expect(nwd_dp("123242526",0)).toEqual(24);
  });




  it('should calculate number of decodings correctly with O(1) memory', () => {
    expect(nwd_c("11",0)).toEqual(2);
      expect(nwd_c("1212",0)).toEqual(5);
      expect(nwd_c("122",0)).toEqual(3);
      expect(nwd_c("1227",0)).toEqual(3);
      expect(nwd_c("10122",0)).toEqual(3);
      expect(nwd_c("101227",0)).toEqual(3);
      expect(nwd_c("101010",0)).toEqual(1);
      expect(nwd_c("123123123",0)).toEqual(27);
      expect(nwd_c("1230123010",0)).toEqual(9);
      expect(nwd_c("123242526",0)).toEqual(24);
  });



});
