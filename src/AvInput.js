import React from 'react';
import classNames from 'classnames';
import {Input} from 'reactstrap';
import InputMask from 'react-input-mask';
import AvBaseInput from './AvBaseInput';


export default class AvInput extends AvBaseInput {
  static defaultProps = Object.assign({}, AvBaseInput.defaultProps, {
    tag: Input,
  });

  static contextTypes = AvBaseInput.contextTypes;

  getValue() {
    return this.props.valueParser ? this.props.valueParser(this.value) : this.value;
  }

  getViewValue() {
    return this.props.valueFormatter ? this.props.valueFormatter(this.value) : this.value;
  }

  render() {
    const {
      errorMessage: omit1,
      validate: omit2,
      validationEvent: omit3,
      state: omit4,
      trueValue: omit5,
      falseValue: omit6,
      valueParser: omit7,
      valueFormatter: omit8,
      className,
      tag,
      getRef,
      id = this.props.name,
      ...attributes
    } = this.props;

    const touched = this.context.FormCtrl.isTouched(this.props.name);
    const hasError = this.context.FormCtrl.hasError(this.props.name);
    let Tag = tag;

    if (Array.isArray(tag)) {
      let tags;
      [Tag, ...tags] = tag;
      attributes.tag = tags
      if(attributes.tag.length <= 1) {
        attributes.tag = attributes.tag[0];
      }
    }

    const classes = classNames(
      className,
      touched ? 'is-touched' : 'is-untouched',
      this.context.FormCtrl.isDirty(this.props.name) ? 'is-dirty' : 'is-pristine',
      this.context.FormCtrl.isBad(this.props.name) ? 'is-bad-input' : null,
      hasError ? 'av-invalid' : 'av-valid',
      touched && hasError && 'is-invalid',
      attributes.type === 'checkbox' && touched && hasError && 'was-validated'
    );

    const value = this.getViewValue();

    return (
      <Tag {...attributes}
        ref={getRef}
        {...this.getValidatorProps()}
        className={classes}
        value={value}
        id={id}
      />
    );
  }
}
