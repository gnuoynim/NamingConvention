interface ModalInterface {
  show: boolean;
  title?: string;
  content: string;
  close ?: boolean;
  confirm?: boolean;
}

export default ModalInterface;
