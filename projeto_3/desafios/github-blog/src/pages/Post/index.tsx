export function Post() {
  const name = window.location.pathname

  return (
    <>
      Post {name}
    </>
  )
}