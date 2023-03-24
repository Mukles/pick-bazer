import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import RealtedPostRow from "./related-post-row";

const BlogItem = () => {
  const { id } = useParams();

  return (
    <article className="entry">
      <figure className="entry-media">
        <Link to="/">
          <img
            src="https://d-themes.com/react_asset_api/molla/uploads/post_1_b9361c0eac.jpg"
            alt=""
          />
        </Link>
      </figure>

      <div className="entry-body">
        <div className="entry-meta">
          <span>
            by <Link to={"/"}>John Doe</Link>
          </span>
          <div className="meta-separator">|</div>
          <span>
            by <Link to={"/"}>John Doe</Link>
          </span>
          <div className="meta-separator">|</div>
          <span>
            by <Link to={"/"}>John Doe</Link>
          </span>
        </div>

        <div className="entry-title">
          <Link to={"/"}>Sed adipiscing ornare.</Link>
        </div>
        <div className="entry-cats">
          in &nbsp; <Link to={"/"}>Lifestyle</Link>
          &nbsp;&nbsp;
          <Link to={"/"}>Shopping</Link>
        </div>
        <div className="entry-content">
          <p>
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
            neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh ...{" "}
          </p>

          {id ? (
            <>
              <img
                src="https://d-themes.com/react/molla/demo-2/images/blog/single/2.jpg"
                alt=""
              />
              <h3>Quisque volutpat mattiseros.</h3>
              <ul>
                <li>
                  Sed pretium, ligula sollicitudin laoreet viverra, tortor
                  libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                  mollis. Ut justo. Suspendisse potenti.
                </li>

                <li>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing, commodo quis, gravida id, est.
                </li>

                <li>
                  Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                  lorem at felis. Vestibulum volutpat, lacus a ultrices
                  sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare
                  nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus
                  sed, urna.
                </li>
              </ul>

              <div className="clear-fix"></div>

              <p>
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti. Sed egestas, ante et vulputate volutpat,
                eros pede semper est, vitae luctus metus libero eu augue. Morbi
                purus libero, faucibus adipiscing, commodo quis, gravida id,
                est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                lorem at felis.
              </p>

              <blockquote>
                <p>
                  “ Sed egestas, ante et vulputate volutpat, eros pede semper
                  est, vitae luctus metus libero eu augue. ”
                </p>
              </blockquote>

              <p>
                Morbi purus libero, faucibus adipiscing, commodo quis, gravida
                id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed
                semper lorem at felis. Vestibulum volutpat, lacus a ultrices
                sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare
                nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus
                sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus
                lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar
                risus, vitae facilisis libero dolor a purus.
              </p>
              <h3>Morbi interdum mollis sapien.</h3>

              <div>
                <img
                  src="https://d-themes.com/react/molla/demo-2/images/blog/single/3.jpg"
                  alt=""
                />
              </div>

              <p>
                Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
                sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
                justo. Suspendisse potenti. Sed egestas, ante et vulputate
                volutpat, eros pede semper est, vitae luctus metus libero eu
                augue. Morbi purus libero, faucibus adipiscing, commodo quis,
                gravida id, est. Sed lectus. Praesent elementum hendrerit
                tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a
                ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien
                ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et,
                dapibus sed, urna.
              </p>

              <p>
                Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
                magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
                facilisis libero dolor a purus. Sed vel lacus. Mauris nibh
                felis, adipiscing varius, adipiscing in, lacinia vel, tellus.
                Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc
                tellus ante, mattis eget, gravida vitae, ultricies ac, leo.
                Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
                Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a
                diam sit amet mi ullamcorper vehicula. Integer adipiscing risus
                a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc
                sem lacus, accumsan quis, faucibus non, congue vel, arcu.
              </p>
            </>
          ) : (
            <Link to={"/"} className="read-more">
              Continue Reading
              <span>
                <ArrowLongRightIcon />
              </span>
            </Link>
          )}
        </div>

        {id && (
          <>
            <div className="entry-fotter">
              <span>Tags:</span>
              <Link to="/" className="tag">
                fashion
              </Link>
              <Link to="/" className="tag">
                fashion
              </Link>
              <Link to="/" className="tag">
                fashion
              </Link>
              <Link to="/" className="tag">
                fashion
              </Link>
            </div>

            <div className="entry-author-details">
              <figure className="author-media">
                <Link to={"/"}>
                  <img
                    src="https://d-themes.com/react/molla/demo-2/images/blog/single/author.jpg"
                    alt=""
                  />
                </Link>
              </figure>
              <div className="author-body">
                <div className="author-header">
                  <Link to="/">John Doe</Link>
                  <Link className="author-link" to={"/"}>
                    View all posts by John Doe
                    <span>
                      <ArrowLongRightIcon />
                    </span>
                  </Link>
                </div>

                <div className="author-content">
                  <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque
                    egestas auguae, eu vulputate magna eros eu erat. Aliquam
                    erat volutpat.
                  </p>
                </div>
              </div>
            </div>

            <div className="page-nav">
              <Link className="prev" to={"/"}>
                <button>
                  <ArrowLongLeftIcon />
                </button>
                <button>
                  <span>Previous Post</span>
                  <span>Cras ornare tristique elit.</span>
                </button>
              </Link>
              <Link className="next" to={"/"}>
                <button>
                  <span>Next Post</span>
                  <span>Cras ornare tristique elit.</span>
                </button>
                <button>
                  <ArrowLongRightIcon />
                </button>
              </Link>
            </div>

            <RealtedPostRow />
          </>
        )}
      </div>
    </article>
  );
};

export default BlogItem;
