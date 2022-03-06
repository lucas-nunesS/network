import { v4 as uuidv4 } from 'uuid';

class Publication {
  id: string;
  dataPost: { text: string; image: string };
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Publication };
