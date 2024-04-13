import AuthReducer from '../context/AuthReducer';

describe('AuthReducer', () => {
  test('returns expected state for the LOGIN action', () => {
    const initialState = { currentUser: null };
    const action = { type: 'LOGIN', payload: { id: 1, username: 'julliet' } };
    const newState = AuthReducer(initialState, action);
    expect(newState).toEqual({ currentUser: { id: 1, username: 'user1' } });
  });

  test('returns the expected state  for LOGOUT action', () => {
    const initialState = { currentUser: { id: 1, username: 'julliet' } };
    const action = { type: 'LOGOUT' };
    const newState = AuthReducer(initialState, action);
    expect(newState).toEqual({ currentUser: null });
  });

  test('returns the expected state for unknown action type', () => {
    const initialState = { currentUser: { id: 1, username: 'usejullietr1' } };
    const action = { type: 'ANY_OTHER_ACTION' };
    const newState = AuthReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
