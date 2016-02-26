jest.dontMock('../actions');

const {UPVOTE, DOWNVOTE, upvote, downvote} = require('../actions');

describe('actions', function(){

  describe('upvote', function(){
    it('should create an action to upvote at a certain index', function(){
			const index = 1;
      const expectedAction = {
        type: UPVOTE,
        index
      }
      expect(upvote(index)).toEqual(expectedAction);
    });
  });

  describe('downvote', function(){
    it('should create an action to downvote at a certain index', function(){
			const index = 1;
      const expectedAction = {
        type: DOWNVOTE,
        index
      }
      expect(downvote(index)).toEqual(expectedAction);
    });
  });

});
