import React from 'react';
import Player from '../components/Player'
import { Col, Row, Container, Button } from 'react-bootstrap'
import utils from '../utils';
import { FaThumbsUp, FaThumbsDown, FaCogs, FaDownload, FaBell } from 'react-icons/fa';
const queryString = require('query-string')

class watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { player: null, video_info: {}, post_info: {} };
    }
    async componentDidMount() {
        this.mountPlayer();
    }
    generateRelated() {

    }
    async mountPlayer() {
        const permalink = queryString.parse(location.search).v
        var playerType = "standard";
        switch (playerType) {
            case "standard": {
                this.setState({
                    player: <Player></Player>, //Insert player here
                    video_info: await utils.permalinkToVideoInfo(permalink),
                    post_info: await utils.permalinkToPostInfo(permalink)
                })
            }
        }
    }
    render() {
        console.log(this.state.post_info)
        return <div>
            <Container fluid pb={0}>
                <Row fluid="md">
                    <Col md={7}>
                        <div>
                            {this.state.player}
                        </div>
                        <div className="float-left">
                            <h2 style={{ fontSize: "18px" }}>
                                <a>{this.state.video_info.title}</a>
                            </h2>
                        </div>
                        <div className="single-video-title box mb-3 clearfix">
                            <div className="float-right" style={{ textAlign: "right !important", float: "right !important", display: "inline-block !important" }}>
                                <span>
                                    <span style={{ padding: "0 !important" }}>
                                        <FaThumbsUp style={{ color: "#d3d3d3" }} />
                                        {
                                            //TODO: Implement likes
                                        }
                                    </span>
                                    <span style={{ padding: "0 !important" }}>
                                        <FaThumbsDown style={{ color: "#d3d3d3" }} />
                                        {
                                            //TODO: Implement dislikes
                                        }
                                    </span>
                                </span>
                                <br />
                                <button style={{ float: "right" }} className="btn btn-sm dropdown-toggle btn-secondary" id="videoOptions" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-secondary btn-sm dropdown-toggle">
                                    <FaCogs />
                                </button>
                            </div>

                        </div>
                        <div className="single-video-author box mb-3">
                            <div className="float-right">
                                <button className="btn btn-light btn-sm" data-subscribe="mediamysteries" type="button">
                                    <span id="substatus">Follow</span>
                                    <strong className="ml-2" id="subcount">
                                        <a href={`/user/${this.state.post_info.author}/followers`} className="view-followers" data-tooltip="tooltip" title="Click to see followers">
                                            {
                                                //TODO: implement folower count.
                                            }
                                        </a>
                                    </strong>
                                    <FaBell className="ml-2 far fa-bell" data-toggle-notifications="mediamysteries"></FaBell>
                                </button>
                                
                                <a target="_blank" href="" className="btn btn-light btn-sm" download="avqmxbem.mp4">
                                    <FaDownload/> Download
                                </a>
                            </div>
                            <img className="img-fluid" src={`https://images.hive.blog/u/${this.state.post_info.author}/avatar`} alt="" />
                            <p>
                                <a>
                                    <strong>
                                        {this.state.post_info.author}
                                    </strong>
                                </a>
                            </p>
                            <small>Published on 
                                {
                                    //TODO: Implement publish date fetching
                                }
                            </small>
                        </div>
                    </Col>
                    <Col md={4}>
                        <Row>
                            {}
                        </Row>
                    </Col>

                </Row>

            </Container>
        </div>;
    }
}

export default watch;