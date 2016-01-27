import React from 'react'

const ENTER = 13

export default class TodoTextInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: props.value || ''
		}
	}

	render() {
		return (
			<input
				id={ this.props.id }
				className={ this.props.className }
				placeholder = { this.props.placeholder }
				onBlur={ this.save }
				onChange={ this.onChange }
				onKeyDown={ this.onKeyDown }
				value={ this.state.value }
				autoFocus={ true }
			/>
		)
	}

	save = () => {
		this.props.onSave(this.state.value)
		this.setState({
			value: ''
		})
	};

	onChange = (event) => {
		this.setState({
			value: event.target.value
		})
	};

	onKeyDown = (event) => {
		if (event.keyCode === ENTER) {
			this.save()
		}
	};
}

TodoTextInput.propTypes = {
	id: React.PropTypes.string,
	className: React.PropTypes.string,
	placeholder: React.PropTypes.string,
	onSave: React.PropTypes.func.isRequired,
	value: React.PropTypes.string
}
