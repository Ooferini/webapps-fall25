import ImageItem from './ImageItem';

export default function ImageList(props) {
  const { images, title } = props;

  return (
    <div>
      <h2>{title}</h2>
      {images.map((img) => {
        return <ImageItem key={img.id} image={img} />;
      })}
    </div>
  );
}
