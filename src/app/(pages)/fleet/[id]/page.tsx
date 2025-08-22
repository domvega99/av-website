import { notFound } from "next/navigation";
import { getPhoto } from "@/lib/unsplash";
import PhotoDetails from "@/app/components/PhotoDetails";
import { Photo } from "@/lib/type";

interface PhotoPageProps {
  params: {
    id: string;
  };
}

const PhotoPage = async ({ params }: PhotoPageProps) => {
  const { id } = await params
  const response = await getPhoto(id);

  if (response.status === 404) {
    notFound();
  }

  const photo = (await response.json()) as Photo;

  return (
    <PhotoDetails
      src={photo.urls.regular}
      alt={photo.alt_description}
      photographer={{
        name: photo.user.name,
        instagram: photo.user.social.instagram_username,
      }}
    />
  );
};

export default PhotoPage;