/// <reference path="../typings/jasmine/jasmine.d.ts" />

import { FindViewModel } from '../Application/TS/ViewModels/FindViewModel.ts';
import { ISpeechService } from '../Emulator/TS/Services/ISpeechService.ts';

describe('Tests for the FindViewModel', () => {
  it('getKeyword() should return a string', () => {
    let returnValue: string = (new FindViewModel()).getKeyword();
    expect(returnValue).toEqual(jasmine.any(String));
  });
  
  it('getKeywordByVoice() should return a string', () => {
    let checkThisValue:string;
    class mockSpeech implements ISpeechService{
        recognize():string{
            return checkThisValue;
        }
    }
    
    let testFindViewModel = new FindViewModel();
    let findKeywordByVoice = testFindViewModel.getKeywordByVoice(new mockSpeech());
    expect(findKeywordByVoice).toEqual(checkThisValue);
  });
});
