import { notFound } from "next/navigation";
import { getPhoto } from "@/lib/unsplash";
import { Photo } from "@/lib/type";
import Modal from "@/app/components/Modal";
import PhotoDetails from "@/app/components/PhotoDetails";

interface PhotoModalPageProps {
  params: {
    id: string;
  };
}

const PhotoModalPage = async ({ params }: PhotoModalPageProps) => {
  const { id } = await params
  const response = await getPhoto(id);

  if (response.status === 404) {
    notFound();
  }

  const photo = (await response.json()) as Photo;

  return (
    <Modal>
      <PhotoDetails
        src={photo.urls.regular}
        alt={photo.alt_description}
        photographer={{
          name: photo.user.name,
          instagram: photo.user.social.instagram_username,
        }}
      />
    </Modal>
  );
};

export default PhotoModalPage;