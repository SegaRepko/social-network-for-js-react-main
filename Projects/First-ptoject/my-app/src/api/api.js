import * as axios from "axios";




const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7c1c4703-15cf-4037-a71c-d823e26acc26"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get('users?page=${currentPage}&count=${pageSize}',)
          .then(response => {
              return response.data;
          });
      },

      follow (userId) {
        return instance.post('follow/{userId}',)
      },
      unfollow (userId) {
        return instance.delet('follow/{userId}',)
    },
    getProfile(userId) {
       return instance.get(`profile/${userId}`);
    }
}

export const authAPI = {
    me() {
    return instance.get('auth/me')
    }
}



// export const getUsers2 = (currentPage = 1, pageSize = 10) => {
//     return instance.get('follow?page=${currentPage}&count=${pageSize}',)
//       .then(response => {
//           return response.data;
//       });
//   }





