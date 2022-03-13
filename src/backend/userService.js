export default class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async createUser({ name, year, faculty, nusnetId }) {
    return this.userRepository.createUser({ name, year, faculty, nusnetId });
  }

  async updateProfile() {
    // TODO:
  }
}
