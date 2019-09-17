import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { Button } from 'reactstrap';
import { AvForm, AvGroup, AvInput } from '../src';

describe('AvGroup', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render with "FormGroup"', () => {
    const { getByTestId } = render(
      <AvForm>
        <AvGroup data-testid="form-group">Yo!</AvGroup>
      </AvForm>
    );

    const formGroup = getByTestId('form-group');

    expect(formGroup.className).toEqual('form-group');
  });

  it('should render color prop based on inputState', async () => {
    const { getByTestId, getByText } = render(
      <AvForm>
        <AvGroup data-testid="form-group">
          <AvInput type="text" name="formInput" required />
          <Button type="submit">Submit</Button>
        </AvGroup>
      </AvForm>
    );

    fireEvent.click(getByText('Submit'));

    await wait(() => {
      const formGroup = getByTestId('form-group');

      expect(formGroup.className).toContain('text-danger');
    });
  });

  it('should render children inside the FormGroup', () => {
    const { getByText } = render(
      <AvForm data-testid="form-con">
        <AvGroup>Yo!</AvGroup>
      </AvForm>
    );

    const child = getByText('Yo!');
    expect(child.parentElement.getAttribute('data-testid')).toBe('form-con');
  });

  it('should render with the props passed in', () => {
    const { getByTestId } = render(
      <AvForm>
        <AvGroup data-testid="form-group" style={{ textAlign: 'center' }}>
          Yo!
        </AvGroup>
      </AvForm>
    );

    const formGroup = getByTestId('form-group');

    expect(formGroup.style.textAlign).toEqual('center');
  });

  // it('should intercept an input registration', () => {
  //   const wrapper = mount(<AvGroup style={{textAlign: 'center'}}>Yo!</AvGroup>, this.options);
  //   expect(wrapper.node.FormCtrl.register).to.not.equal(this.registerSpy);
  //   const input  = {props: this.props};
  //   wrapper.node.FormCtrl.register(input);
  //   expect(wrapper.state('input')).to.equal(input);
  //   expect(this.registerSpy).to.have.been.calledWith(input);
  // });
});
