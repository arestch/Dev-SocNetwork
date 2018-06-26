import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";
import PropTypes from "prop-types";
import isExternal from "is-url-external";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img
                  className="rounded-circle"
                  src={profile.user.avatar}
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{profile.user.name}</h1>
              <p className="lead text-center">
                {profile.status}{" "}
                {isEmpty(profile.location) ? null : (
                  <span>at {profile.company}</span>
                )}
              </p>

              {isEmpty(profile.location) ? null : <p>{profile.company}</p>}

              <p>
                {isEmpty(profile.website) ? null : (
                  <a
                    className="text-white p-2"
                    href={
                      isExternal(profile.website)
                        ? profile.website
                        : `//${profile.website}`
                    }
                    target="_black"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social && profile.social.twitter) ? null : (
                  <a
                    className="text-white p-2"
                    href={
                      isExternal(profile.social.twitter)
                        ? profile.social.twitter
                        : `//${profile.social.twitter}`
                    }
                    target="_black"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <a
                    className="text-white p-2"
                    href={
                      isExternal(profile.social.facebook)
                        ? profile.social.facebook
                        : `//${profile.social.facebook}`
                    }
                    target="_black"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social && profile.social.youtube) ? null : (
                  <a
                    className="text-white p-2"
                    href={
                      isExternal(profile.social.youtube)
                        ? profile.social.youtube
                        : `//${profile.social.youtube}`
                    }
                    target="_black"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social && profile.social.linkedin) ? null : (
                  <a
                    className="text-white p-2"
                    href={
                      isExternal(profile.social.linkedin)
                        ? profile.social.linkedin
                        : `//${profile.social.linkedin}`
                    }
                    target="_black"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                )}
                {isEmpty(profile.social && profile.social.instagram) ? null : (
                  <a
                    className="text-white p-2"
                    href={
                      isExternal(profile.social.instagram)
                        ? profile.social.instagram
                        : `//${profile.social.instagram}`
                    }
                    target="_black"
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileHeader;
