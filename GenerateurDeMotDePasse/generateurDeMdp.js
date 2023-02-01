function generatePassword(difficulty) {
    let password = '';
    let characters = '';
  
    switch (difficulty) {
      case 'easy':
        characters = 'abcdefghijklmnopqrstuvwxyz';
        break;
      case 'medium':
        characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        break;
      case 'hard':
        characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:\'",.<>/?`~';
        break;
      default:
        characters = 'abcdefghijklmnopqrstuvwxyz';
        break;
    }
  
    for (let i = 0; i < 8; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return password;
  }