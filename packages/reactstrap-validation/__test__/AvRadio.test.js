import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { Button } from 'reactstrap';
import { AvRadio, AvForm, AvRadioGroup } from '../src';

const renderForm = ({ radioProps, radioGroupProps } = {}) =>
  render(
    <AvForm>
      <AvRadioGroup data-testid="radio-group" name="radioGroup" {...radioGroupProps}>
        <AvRadio data-testid="radio-btn" name="yo" value="yoyo" {...radioProps} />
      </AvRadioGroup>
      <Button type="submit">Submit</Button>
    </AvForm>
  );

describe('AvRadio', () => {
  it('should render a reactstrap Input', () => {
    const { getByTestId } = renderForm();

    getByTestId('radio-btn');
  });

  it('should have "is-untouched" class when untouched', () => {
    const { getByTestId } = renderForm();

    const radio = getByTestId('radio-btn');

    expect(radio.className).not.toContain('is-touched');
    expect(radio.className).toContain('is-untouched');
  });

  it('should have "is-pristine" class when not dirty', () => {
    const { getByTestId } = renderForm();

    const radio = getByTestId('radio-btn');

    expect(radio.className).not.toContain('is-dirty');
    expect(radio.className).toContain('is-pristine');
  });

  it('should have "av-valid" not "is-invalid" class when valid', async () => {
    const { getByTestId } = renderForm();

    const radio = getByTestId('radio-btn');

    expect(radio.className).not.toContain('is-invalid');
    expect(radio.className).toContain('av-valid');
  });

  it('should have "is-touched" class when touched', async () => {
    const { getByTestId } = renderForm();
    const radio = getByTestId('radio-btn');

    fireEvent.click(radio);

    await wait(() => {
      expect(radio.className).toContain('is-touched');
      expect(radio.className).not.toContain('is-untouched');
    });
  });

  it('should not have "is-pristine" class when  dirty', async () => {
    const { getByTestId } = renderForm();
    const radio = getByTestId('radio-btn');

    fireEvent.click(radio);

    await wait(() => {
      expect(radio.className).toContain('is-dirty');
      expect(radio.className).not.toContain('is-pristine');
    });
  });

  it('should have "is-invalid" not "av-valid" class when invalid and touched', async () => {
    const { getByTestId, getByText } = renderForm({
      radioGroupProps: {
        required: true
      }
    });
    const radio = getByTestId('radio-btn');

    fireEvent.click(getByText('Submit'));

    await wait(() => {
      expect(radio.className).toContain('is-invalid');
      expect(radio.className).not.toContain('av-valid');
    });
  });

  it('should toString the value to add it to the DOM via Input', () => {
    const { getByTestId } = renderForm();
    const radio = getByTestId('radio-btn');

    expect(radio.value).toBe('yoyo');
  });

  it('call on chnage handler', async () => {
    const onChange = jest.fn();
    const { getByTestId } = renderForm({
      radioGroupProps: {
        onChange
      }
    });
    const radio = getByTestId('radio-btn');

    fireEvent.click(radio);

    await wait(() => {
      expect(onChange.mock.calls[1][1]).toBe('yoyo');
    });
  });
});