const Loading = () => <h3>Loading....</h3>;

export default function withLoading(Component) {
  return function ({ isLoading, ...rest }) {
    return isLoading ? <Loading /> : <Component {...rest} />;
  };
}
