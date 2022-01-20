import React, { Component } from "react";
import { connect } from "react-redux";
import { getTeasers } from "../../actions/teasersAction";
import { isMobile } from "react-device-detect";

class teasers extends Component {
  componentDidMount() {
    this.props.getTeasers();
  }
  render() {
    const { teasers } = this.props.teasers;

    return (
      <div
        className={`columns large-8 xlarge-9 ${
          isMobile ? "order-2" : "order-1"
        }`}
      >
        <div className="container">
          <div className="row">
            {teasers.map((teaser) => (
              <React.Fragment key={teaser.id}>
                <article className="teaser col-lg-6">
                  <div className="teaser__image">
                    <a href={teaser.url}>
                      <picture>
                        <img src={teaser.contentImageUrl} alt="" />
                      </picture>
                    </a>
                  </div>
                  <div className="teaser__text">
                    <h2 className="teaser__title">
                      <a href={teaser.url}>{teaser.contentTitle}</a>
                    </h2>
                    <p className="teaser__summary">{teaser.contentSummary}</p>
                    <p className="teaser__body">{teaser.contentTitle}</p>
                  </div>
                </article>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ teasers: state.teasers });

export default connect(mapStateToProps, { getTeasers })(teasers);
