import React from 'react';

class Drum extends React.Component {

    handleClick = () => {
        if (this.props.play) {
            this.audio.play();
            this.props.handleDisplay(this.props.id);
            this.audio.volume = this.props.vol / 100;
        } else {
            this.audio.pause();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress)
    }

    handleKeyPress = (event) => {
        if (event.keyCode === this.props.innerText.charCodeAt()) {
            this.handleClick();
            this.props.handleDisplay(this.props.id)
        }
    }

    render() {
        return (
            <div className='drum-pad' id={this.props.id}
                onClick={this.handleClick}>
                {this.props.innerText}
                <audio
                    ref={ref => this.audio = ref}
                    className='clip'
                    id={this.props.innerText}
                    src={this.props.src}
                >
                </audio>
            </div>
        );
    }
}

export default Drum;
