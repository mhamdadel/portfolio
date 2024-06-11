export default function ViewTitleComponent({ title }) {
  return (
    <h1 className={"p-4 text-5xl lg:text-8xl font-bold text-on-surface"}>
      { title }
    </h1>
  )
}
